import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Categories - Arimart',
}

export default function CategoriesLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <a href="#category-main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-3 py-2 rounded-md z-50">Skip to categories</a>

        <Navbar />

        <main id="category-main" className="pt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-400 to-green-600 text-white py-8 px-6 rounded-lg shadow-sm">
                <h1 className="text-2xl md:text-3xl font-extrabold">Categories</h1>
                <p className="mt-1 opacity-90">Browse product categories</p>
              </div>
            </div>
          </div>

          <div>
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  )
}
