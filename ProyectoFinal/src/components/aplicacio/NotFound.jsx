import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
      <>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <div style={{ background: '#E5E7EB', width: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #9CA3AF', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <p style={{ fontSize: '4rem', fontWeight: 'bold', color: '#D1D5DB' }}>404</p>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#6B7280', marginTop: '1rem' }}>Pàgina no trobada</p>
            <p style={{ color: '#6B7280', marginTop: '1rem', paddingBottom: '1rem', borderBottom: '2px solid #9CA3AF', textAlign: 'center' }}>Ho sento, La pàgina que vols veure no l'hem trobada.</p>
            <a href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3B82F6', color: '#F9FAFB', padding: '0.5rem 1rem', marginTop: '1rem', borderRadius: '0.25rem', transition: 'background-color 0.3s', textDecoration: 'none' }}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
              </svg>
              {/* <span>Return Home</span> */}
            </a>
          </div>
        </div>
      </>
    )
  }
  
  