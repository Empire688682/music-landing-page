"use client";
import Image from "next/image";
import { useState } from "react";
import { FaSpotify, FaSoundcloud, FaInstagram, FaTwitter, FaYoutube, FaMusic, FaBars, FaTimes } from "react-icons/fa";

export default function MusicPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 z-[99]">
      {/* Navbar */}
      <nav className="w-full max-w-6xl flex justify-between items-center mx-2 py-4 px-6 bg-white/10 rounded-lg shadow-lg fixed top-0 backdrop-blur-md z-[999]">
        <h1 className="text-2xl font-bold">Burna</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-white/80 transition">About</a>
          <a href="#music" className="hover:text-white/80 transition">Music</a>
          <a href="#contact" className="hover:text-white/80 transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed z-[888] top-0 right-0 w-2/3 h-full bg-black/90 backdrop-blur-lg p-6 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <button
          onClick={() => setMenuOpen(false)}
          className="text-white text-3xl absolute top-4 right-4"
        >
          <FaTimes />
        </button>
        <nav className="flex flex-col mt-16 space-y-6 text-xl">
          <a href="#about" className="hover:text-white/80 transition" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#music" className="hover:text-white/80 transition" onClick={() => setMenuOpen(false)}>Music</a>
          <a href="#contact" className="hover:text-white/80 transition" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>

      {/* Hero Section */}
      <div
        className="relative w-full h-screen mt-7 flex items-center justify-center text-center md:text-left bg-black rounded-lg shadow-lg overflow-hidden"
        style={{
          backgroundImage: "url('/love-damini.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl p-6 text-center text-white">
          <h1 className="md:text-5xl text-4xl font-semibold">Burna Fan Base</h1>
          <a
            href="https://audiomack.com/burna-boy"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-100 transition"
          >
            Listen to My Work
          </a>
        </div>
      </div>


      {/* About Section */}
      <div id="about" className="mt-16 max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold">About Burna Boy</h2>
        <p className="mt-4 text-white/80">Burna Boy, also known as the African Giant, is a Grammy Award-winning artist known for his unique fusion of Afrobeats, reggae, and dancehall.
          With powerful storytelling, deep-rooted African rhythms, and a charismatic stage presence, he has redefined global music.
          From his breakout hit # Like to Party to chart-topping albums like <em>African Giant</em> and <em>Twice As Tall</em>, Burna Boy continues to make waves, representing Africa on the world stage.
          His music is not just sound—its a movement, a culture, and a voice for the people. </p>
      </div>

      {/* Music Projects */}
      <div className="mt-16 px-6">
        <h2 className="text-3xl text-center font-bold mb-5">Albums</h2>
        <div id="music" className="w-full max-w-4xl justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 p-6 rounded-lg shadow-lg text-center hover:bg-white/20 transition">
            <Image
              src="/love-damini.jpeg"
              width={300}
              height={200}
              alt="Album Cover"
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-xl font-bold mt-4">Love Damini</h3>
            <p className="text-white/70">2022</p>
            <a
              href="https://audiomack.com/burna-boy/album/love-damini-af-version"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-100 transition"
            >
              Listen to My Work
            </a>
          </div>

          <div className="bg-white/10 p-6 rounded-lg shadow-lg text-center hover:bg-white/20 transition">
            <Image
              src="/i-told-them.jpeg"
              width={300}
              height={200}
              alt="Single Cover"
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-xl font-bold mt-4">I told them</h3>
            <p className="text-white/70">2023</p>
            <a
              href="https://audiomack.com/burna-boy/album/i-told-them-af"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-100 transition"
            >
              Listen to My Work
            </a>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-lg text-center hover:bg-white/20 transition">
            <Image
              src="/twice-as-tall.jpeg"
              width={300}
              height={200}
              alt="Single Cover"
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-xl font-bold mt-4">Twice as tall</h3>
            <p className="text-white/70">2020</p>
            <a
              href="https://audiomack.com/burna-boy/album/twice-as-tall-africa"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-100 transition"
            >
              Listen to My Work
            </a>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-lg text-center hover:bg-white/20 transition">
            <Image
              src="/africa-giant.jpeg"
              width={300}
              height={200}
              alt="Single Cover"
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-xl font-bold mt-4">African Giant</h3>
            <p className="text-white/70">2019</p>
            <a
              href="https://audiomack.com/burna-boy/album/african-giant-af-version"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-100 transition"
            >
              Listen to My Work
            </a>
          </div>
        </div>
      </div>


      {/* Contact Section */}
      <div id="contact" className="mt-16 max-w-3xl text-center px-6">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-4 text-white/80">For bookings, collaborations, or inquiries, reach out to me via email or social media.</p>
        <button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-100 transition">Contact Me</button>
      </div>

      <div className="mt-12 flex space-x-6">
        <a href="https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition">
          <FaSpotify size={32} />
        </a>
        <a href="https://soundcloud.com/burnaboy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition">
          <FaSoundcloud size={32} />
        </a>
        <a href="https://www.instagram.com/burnaboygram/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition">
          <FaInstagram size={32} />
        </a>
        <a href="https://twitter.com/burnaboy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition">
          <FaTwitter size={32} />
        </a>
        <a href="https://www.youtube.com/c/BurnaBoyOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition">
          <FaYoutube size={32} />
        </a>
        <a href="https://www.tiktok.com/@burnaboy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition">
          <FaMusic size={32} />
        </a>
      </div>



      {/* Footer */}
      <footer className="mt-16 px-6 w-full max-w-6xl text-center border-t border-white/20 py-6">
        <p className="text-white/70">© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
