import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div
        className="z-10 hidden top-0 bottom-0 left-0 right-0 bg-black/50"
        id="backdrop"
      ></div>

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  )
}

export default DefaultLayout
