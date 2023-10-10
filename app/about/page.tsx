import Image from "next/image"

export default function About(){
    return(
        <div className="grid grid-cols-1 lg:w-2/4 sm:w-3/4  mx-auto my-16 p-9 gap-6 text-center bg-blueGreen rounded-md">
        <h1 className="text-center text-3xl mb-4 underline text-cianOscuro">À propos</h1>
        <p className="md:text-2xl sm:text-xs">Je m'appelle Bertrand et je suis un passionné de photographie, de nature et d'informatique. Je vis à Aix-les-Bains, en Savoie, une région magnifique qui regorge de paysages à couper le souffle.
            Je partage sur ce blog mes photos de mes explorations dans la région, mais aussi de mes voyages et de mes rencontres. Je suis toujours à la recherche de nouvelles perspectives et de techniques pour améliorer mes photos.
            </p>
            
        <p className="md:text-2xl sm:text-xs mb-6">
            J'adore également l'informatique, plus particulièrement le développement web et j'ai codé moi-même ce blog. Je suis toujours à la recherche de nouvelles façons d'utiliser la technologie pour partager mes photos et ma passion avec le monde entier.
            Je vous invite à découvrir mon travail et à me suivre dans mes aventures !
        </p>

        <Image src="/moi.jpeg" width={150} height={150} alt="Avatar de Smek-one"/>
        </div>
    )
}