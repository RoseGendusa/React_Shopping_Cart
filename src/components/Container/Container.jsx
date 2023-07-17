import './Container.css';

const Container = ({children}) => {
  return (
    <div className="Container">

        <div className="Container-Card">
           {children}
        </div>
    </div>
  )
}

export default Container