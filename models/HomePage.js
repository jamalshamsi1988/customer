
import Card from './../components/module/Card';

const HomePage = ({customers}) => {
  return (
    <div>
      
      {
        customers.map(customer => <Card key={customer._id} customer={customer} />)
      }
    </div>
  )
}

export default HomePage
