import {
  Body,
  Container,
  Heading,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface ResetPasswordEmailProps {
  user: string
  token: string
}

const baseUrl = process.env.DOMAIN ? `https://${process.env.DOMAIN}` : ''

export const ResetPasswordEmail: React.FC<
  Readonly<ResetPasswordEmailProps>
> = ({ user, token }) => {
  return (
    <Html>
      <Head />
      <Preview>Store-88 Redefinir a senha</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/logo.png`}
            width="40"
            height="33"
            alt="Store-88"
          />

          <Heading style={heading}>Store 88</Heading>
          <Section>
            <Text style={text}>Olá {user},</Text>
            <Text style={text}>
              Alguém solicitou recentemente uma alteração de senha da sua conta.
              Se foi você, você pode definir uma nova senha aqui:
            </Text>
            <Link style={button} href={token}>
              Redefinir senha
            </Link>
            <Text style={text}>
              Se você não deseja alterar sua senha ou não solicitou isso, basta
              ignorar e excluir esta mensagem.
            </Text>
            <Text style={text}>
              Para manter sua conta segura, não encaminhe este e-mail para
              ninguém.
            </Text>
          </Section>
          <Text style={paragraph}>
            Atenciosamente,
            <br />- Store 88
          </Text>
          <Hr style={hr} />
          <Text style={{ textAlign: 'center', color: '#706a7b' }}>
            <Img
              src={`${baseUrl}/logo.png`}
              width={30}
              height={30}
              style={{
                WebkitFilter: 'grayscale(100%)',
                filter: 'grayscale(100%)',
                margin: '20px 0',
              }}
            />
            © 2023{' '}
            <Link
              style={{ color: '#706a7b', textDecoration: 'underline' }}
              target="_blank"
              referrerPolicy="no-referrer"
              href="https://thilourenco.dev.br/"
            >
              thilourenco.dev
            </Link>{' '}
            All Rights Reserved <br />
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default ResetPasswordEmail

const main = {
  backgroundColor: '#f6f9fc',
  padding: '10px 0',
}

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  padding: '45px',
}

const text = {
  fontSize: '16px',
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '300',
  color: '#404040',
  lineHeight: '26px',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
}

const button = {
  backgroundColor: '#5c04a4',
  borderRadius: '4px',
  color: '#fff',
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '210px',
  padding: '14px 7px',
}

const hr = {
  borderColor: '#dddddd',
  marginTop: '48px',
}

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '48px',
}
