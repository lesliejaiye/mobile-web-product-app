import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
          <div className="w-full max-w-sm h-[700px] bg-white rounded-[40px] border-2 border-gray-300 shadow-xl overflow-hidden relative">
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-900 rounded-full"></div>
            <div className="flex justify-center flex-col items-center h-full">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
