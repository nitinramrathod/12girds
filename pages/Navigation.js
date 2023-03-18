import React from 'react'
import Image from 'next/image'

function Navigation() {
  return (
    <section>
    <div className="container px-4 px-sm-0">
      <nav>
        <a href="#">
          <Image src="/images/logo.svg" alt="Logo" width={120} height={53} />
        </a>

        <span className="material-symbols-outlined">
          menu
        </span>

      </nav>
    </div>
  </section>
  )
}

export default Navigation;