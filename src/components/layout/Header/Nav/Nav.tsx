'use client'
import React from 'react'
import { useState } from 'react'
import NavLink from './NavLink'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav 
      role="navigation" 
      aria-label="Menu mobile"
      className="relative">
      <div className="hidden sm:flex sm:text-base md:text-lg md:font-bold justify-center items-center gap-4">
          <NavLink 
            aria-label="Accueil"
            href="/">Accueil</NavLink>
          <NavLink 
            aria-label="Gazette"
            href="/gazette">Gazette</NavLink>
          <NavLink 
            aria-label="Service"
            href="/services">Service</NavLink>
          <NavLink 
            aria-label="Annuaire"
            href="/annuaire">Annuaire</NavLink>
          <NavLink 
            aria-label="Contact"
            href="/contact">Contact</NavLink>
          <NavLink 
            aria-label="Connexion"
            href="/login">Connexion</NavLink>
      </div>
      <button
        className="sm:hidden"
        aria-expanded={isOpen}
        aria-label="Menu principal" 
        onClick={() => setIsOpen(!isOpen)}>
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-gray-600"></span>
          <span className="block w-8 h-0.5 bg-gray-600"></span>
          <span className="block w-8 h-0.5 bg-gray-600"></span>
        </div>
      </button>
      <div className={`
          fixed top-0 left-0 w-screen
          bg-gray-900/90 backdrop-blur-sm
          transform transition-all duration-500 ease-in-out
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
          sm:hidden z-40
        `}
          onClick={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center gap-4 text-white">
          <NavLink 
            aria-label="Accueil"
            href="/">Accueil</NavLink>
          <NavLink 
            aria-label="Gazette"
            href="/gazette">Gazette</NavLink>
          <NavLink 
            aria-label="Service"
            href="/services">Service</NavLink>
          <NavLink 
            aria-label="Annuaire"
            href="/annuaire">Annuaire</NavLink>
          <NavLink 
            aria-label="Contact"
            href="/contact">Contact</NavLink>
          <NavLink 
            aria-label="Connexion"
            href="/login">Connexion</NavLink>
        </div>
      </div>
      <div 
        className={`
          fixed inset-0 bg-black/20 backdrop-blur-sm
          transition-opacity duration-500
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          sm:hidden z-30
        `}
        onClick={() => setIsOpen(false)}
      />
    </nav>
  ) 
}
