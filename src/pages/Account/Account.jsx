import { Container } from '@mui/system';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import TopBar from '../../components/TopBar/TopBar';
import AccountNav from './components/AccountNav/AccountNav';
import Books from './pages/Books/Books';
import Overview from './pages/Overview/Overview';

const Account = ({ navbarLinks, accountLinks, user, books, route = '' }) => {
  const routes = {
    books: (
      <Books
        user={user}
        books={books}
      />
    ),
  };

  const routeSelector = () => {
    return route ? (
      routes[route]
    ) : (
      <Overview
        user={user}
        books={books}
      />
    );
  };
  return (
    <div className="accountPage">
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
      />
      <SearchBar isMini={true} />
      <Container>
        <AccountNav />
        {routeSelector()}
      </Container>
      <Footer />
    </div>
  );
};

export default Account;
