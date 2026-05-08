import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Texto = () => {
    return (
        <Card id="box1" className="flex-1 bg-card text-card-foreground border-border shadow-sm">
            <CardHeader>
                <CardTitle className="text-3xl font-bold">S. Silvestre Cidade do Porto</CardTitle>
                <CardDescription className="text-lg font-medium text-muted-foreground">28 Dezembro 2026</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
                <p>A <a href="https://www.lidl.pt" target="_blank" className="text-primary font-bold hover:underline">Lidl</a> S. Silvestre Cidade do Porto irá voltar com o objetivo de cumprir a tradição e encher as ruas da Invicta, tentando reunir bastantes participantes naquela que é uma das provas mais emblemáticas do atletismo nacional.</p>                <p>A corrida <strong className="font-semibold text-foreground">terá início às 18h00</strong>, na Avenida dos Aliados, e termina junto à Câmara Municipal do Porto, num percurso marcado por um ambiente festivo, grande adesão popular e forte apoio do público ao longo de todo o trajeto. O tiro de partida vai ser dado pelo presidente da Câmara Municipal do Porto, Pedro Duarte, acompanhado pelo vereador Rodrigo Passos, Paulo Santos, vice-presidente do IPDJ, João Duarte, diretor-geral do Lidl Portugal, o apresentador Jorge Gabriel e o futebolista internacional português Pepe.</p>
                <p>Após o final da prova, irá haver a <strong className="font-semibold text-foreground">cerimónia de pódio</strong>, junto à meta. Durante este momento simbólico, será entregue uma lembrança à Câmara Municipal do Porto e ao Lidl, naming sponsor do evento. A entrega é realizada por Jorge Teixeira, Diretor-Geral da Runporto, o apresentador Jorge Gabriel e o internacional português Pepe.</p>
                <p>A entrega dos prémios aos vencedores conta com a presença de Pedro Duarte, Presidente da Câmara Municipal do Porto, Paulo Santos, vice-presidente do IPDJ e João Duarte, Diretor-Geral do Lidl Portugal.</p>
            </CardContent>
        </Card>
    )
}

const Imagem = () => {
    return (
        <Card id="box2" className="overflow-hidden bg-card border-border w-2/5 shrink-0 shadow-sm">
            <img
                src="malta_correr.jpg"
                alt="img"
                className="w-full h-auto block"
            />
            <div className="p-4 ">
                <figcaption className="text-xl font-medium text-center text-muted-foreground">
                    S. Silvestre Porto 2025
                </figcaption>
            </div>
        </Card>
    )
}

const Description = () => {
    return (
        <div className="flex flex-row items-center gap-6 p-6 w-4/5 mx-auto bg-background text-foreground">
            <Texto/>
            <Imagem/>
        </div>
    )
}

export default Description;