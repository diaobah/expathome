export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-700">Bienvenue sur ExpatHome</h1>
      <p className="mt-4 text-lg text-gray-700 text-center max-w-xl">
        La plateforme de réservation de logements dédiée aux expatriés et voyageurs en Guinée.
      </p>
      <a href="#contact" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
        Nous contacter
      </a>
    </div>
  )
}