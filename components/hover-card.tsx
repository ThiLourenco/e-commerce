import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function Card() {
  return (
    <HoverCard>
      <HoverCardTrigger>Tabela de Medidas</HoverCardTrigger>
      <HoverCardContent>
       <table>
        <tr>
          Tamanho	Cumprimento Largura
        </tr>
       </table>
      </HoverCardContent>
    </HoverCard>
  )
}
