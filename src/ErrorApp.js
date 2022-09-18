import React, {useState} from 'react'

function ErrorApp() {
    const [error , setError] = useState("");
  return (
    <div>
        {error && <h1>{error}</h1>}
        <button onClick={() => setError("Error al traer con la API")}>Generar Error</button>
        <button onClick={() => setError("Credenciales Incorrectas")}>Generar otro Error</button>
        <button onClick={() => setError("")}>Proceso exitoso</button>
    </div>
  )
}

export { ErrorApp };