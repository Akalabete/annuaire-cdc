import React from 'react'

export default function Footer() {
  return (
    <div>
        <h2> Pour en savoir  Plus</h2>
        <div className="flex flex-row  w-full">
            <div className="flex-col w-1/3">
                <h3>Liens utiles</h3>
                <ul>
                    <li>xxxxx</li>
                    <li>yyyyy</li>
                    <li>zzzzzz</li>
                </ul>    
            </div>
            <div className="flex-col w-1/3">
                <h3>Nos partenaires</h3>    
                <ul>
                    <li>xxxxx</li>
                    <li>yyyyy</li>
                    <li>zzzzzz</li>
                </ul>    
            </div>
            <div className="flex-col w-1/3">
                <h3>Legal</h3>    
                <ul>
                    <li>CGV</li>
                    <li>Confidentialité</li>
                    <li>Webmaster</li>
                </ul>    
            </div>
        </div>
    </div>
  )
}
