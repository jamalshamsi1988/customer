import Link from 'next/link';

const Layout = ({children}) => {
  return (
    <>
    <header className="header">
        <h2>Management CRM</h2>
        <Link href='/add-customer'>Add Customer</Link>
    </header>
    <div className="main">{children}</div>
    <footer className="footer">
        <a href='https://github.com/jamalshamsi1988' target='_blank' rel='noreferrer'>Jamal Shamsi</a> 
        Next.js | CRM Project &copy;
    </footer>
      
    </>
  );
}

export default Layout;
