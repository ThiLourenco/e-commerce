/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '../../../lib/stripe'
import prisma from '@/prisma/prisma'

const webhookHandler = async (request: NextRequest) => {
  try {
    const body = await request.text()
    const endpointSecret = process.env.STRIPE_SECRET_WEBHOOK_KEY!
    const sig = headers().get('stripe-signature') as string

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
      console.log('Webhook verified')
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      // On error, log and return the error message.
      if (err! instanceof Error) console.log(err)
      console.log(`❌ Error message: ${errorMessage}`)

      return NextResponse.json(
        {
          error: {
            message: `Webhook Error: ${errorMessage}`,
          },
        },
        { status: 400 },
      )
    }

    // Successfully constructed event.
    console.log('✅ Success:', event.id)

    const eventPaymentIntent = event.data.object as Stripe.PaymentIntent
    const eventPaymentId = eventPaymentIntent.id

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        await prisma.payment.create({
          data: {
            paymentIntentId: eventPaymentId,
            amount: eventPaymentIntent.amount,
            status: eventPaymentIntent.status,
            name: eventPaymentIntent.shipping?.name,
            email: eventPaymentIntent.receipt_email,
            city: eventPaymentIntent.shipping?.address?.city,
            country: eventPaymentIntent.shipping?.address?.country,
            line1: eventPaymentIntent.shipping?.address?.line1,
            line2: eventPaymentIntent.shipping?.address?.line2,
            postalCode: eventPaymentIntent.shipping?.address?.postal_code,
            created: eventPaymentIntent.created,
          },
        })
        console.log(eventPaymentIntent)
        break
      case 'checkout.session.completed':
        const session = event.data.object

        // const line_items = await stripe.checkout.sessions.listLineItems()
        break
      default:
        console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`)
        break
    }
    // Return a response to acknowledge receipt of the event.
    return NextResponse.json({ received: true })
  } catch (err) {
    return NextResponse.json(
      {
        error: {
          message: `Method Not Allowed`,
        },
      },
      { status: 405 },
    ).headers.set('Allow', 'POST')
  }
}

export { webhookHandler as POST }
