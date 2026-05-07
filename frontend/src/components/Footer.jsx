import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
    return (
        <footer className="bg-[#292929] text-[#ccc] px-5 pt-10 pb-2.5 font-sans">
            <div className="flex gap-[30px] w-full">

                <div className="flex-1">
                    <h4 className="mb-4 text-white font-semibold text-lg">Corrida S. Silvestre</h4>
                    <p className="mb-2">Evento anual de corrida na cidade do Porto, onde toda a gente se diverte.</p>
                    <p className="mb-2">Data: 31 Dezembro</p>
                    <strong className="text-white block mt-2">Venha correr connosco!</strong>
                </div>

                <div className="flex-1">
                    <h4 className="mb-4 text-white font-semibold text-lg">Organizadores</h4>
                    <p className="mb-2">Afonso Martins</p>
                    <p className="mb-2">Bernardo Luziário</p>
                    <p className="mb-2">Carlos Reis</p>
                    <p className="mb-2">Dinis Lopes</p>
                </div>

                <div className="flex-1">
                    <h4 className="mb-4 text-white font-semibold text-lg">Patrocinadores</h4>
                    <ul className="list-none p-0">
                        <li className="mb-2"><a href="https://www.lidl.pt/" className="text-[#ccc] hover:text-white no-underline">Lidl</a></li>
                        <li className="mb-2"><a href="https://tvi.iol.pt/" className="text-[#ccc] hover:text-white no-underline">TVI</a></li>
                        <li className="mb-2"><a href="https://www.edp.pt/" className="text-[#ccc] hover:text-white no-underline">edp</a></li>
                        <li className="mb-2"><a href="https://mimosa.pt/" className="text-[#ccc] hover:text-white no-underline">Mimosa</a></li>
                    </ul>
                </div>

                <div className="flex-1">
                    <h4 className="mb-4 text-white font-semibold text-lg">Links</h4>
                    <ul className="list-none p-0">
                        <li className="mb-2"><a href="./index.html" className="text-[#ccc] hover:text-white no-underline">Início</a></li>
                        <li className="mb-2"><a href="form_volun.html" className="text-[#ccc] hover:text-white no-underline">Inscrição voluntário</a></li>
                    </ul>
                </div>

                <div className="flex-1">
                    <h4 className="mb-4 text-white font-semibold text-lg">Redes Sociais</h4>
                    <ul className="list-none p-0">
                        <li className="mb-2"><a href="https://web.facebook.com/saosilvestredelisboa" className="text-[#ccc] hover:text-white no-underline">Facebook</a></li>
                        <li className="mb-2"><a href="https://www.instagram.com/saosilvestredelisboa" className="text-[#ccc] hover:text-white no-underline">Instagram</a></li>
                        <li className="mb-2"><a href="https://www.youtube.com/playlist?list=PL1zIRddiEL3TuNTlZiNSkEFiJO8fiyWRA" className="text-[#ccc] hover:text-white no-underline">YouTube</a></li>
                    </ul>
                </div>

                <div className="flex-1">
                    <h4 className="mb-4 text-white font-semibold text-lg">Newsletter</h4>
                    <form className="flex flex-col gap-2 m-0" onSubmit={(e) => e.preventDefault()}>
                        <Input
                            type="email"
                            placeholder="O teu email"
                            className="bg-black/20 border-transparent text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-white"
                        />
                        <Button
                            type="submit"
                            className="bg-[#444] text-white hover:bg-[#666] border-none"
                        >
                            Enviar
                        </Button>
                    </form>
                    <div className="mt-4">
                        <strong className="text-white">Contacto: <br /> +351 951 345 678</strong>
                    </div>
                </div>

            </div>

            <div className="text-center border-t border-[#444] mt-10 pt-4 text-sm">
                <p>© 2026 Corrida de S. Silvestre Porto</p>
            </div>

        </footer>
    )
}

export default Footer;