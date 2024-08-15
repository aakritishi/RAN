import React, { useState } from 'react';
import '../Login/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-interactive-background">
      <div className="auth-card">
       
        <h2 className="mb-8 text-4xl font-extrabold text-center text-white futuristic-text">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 text-lg font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              className="auth-input"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-lg font-medium text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              className="auth-input"
              required
            />
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="confirm-password" className="block mb-1 text-lg font-medium text-gray-300">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="auth-input"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="auth-button"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-6 text-center">
          <div className="social-buttons">
            
             
              <div className="flex justify-center mt-4 ">
              <button className="social-button facebook">     <FontAwesomeIcon icon={faFacebook} className="text-2xl text-white transition hover:text-gray-400" />   </button>
              <button className="social-button twiter"> <FontAwesomeIcon icon={faTwitter} className="text-2xl text-white transition hover:text-gray-400" /> </button>
              <button className="social-button linkin">  <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-white transition hover:text-gray-400" /></button>
              <button className="social-button instagram"> <FontAwesomeIcon icon={faInstagram} className="text-2xl text-white transition hover:text-gray-400" /></button>
              </div>
         
         
          </div>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="toggle-button"
          >
            {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
}
