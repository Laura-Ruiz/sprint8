import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    } return children;

};
export default Protected;


// const Protected = ({ element, isLoggedIn, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         isLoggedIn === true
//             ? <Component {...props} />
//             : <Redirect to='/' />
//     )} />
// )

// export default Protected;