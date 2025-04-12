export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-kusagi text-washi-50 py-6">
      <div className="container mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-washi-50 to-transparent my-8"></div>
        <div className="text-center w-full">
          <p className="text-sm tracking-wider">
            © {currentYear} 西野龍ノ介 - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
