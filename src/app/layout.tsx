import '../app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className='container mx-auto px-4'>{children}</div>
      </body>
    </html>
  );
}
