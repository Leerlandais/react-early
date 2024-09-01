
import { Link as RouterLink } from 'react-router-dom';

function Link({ linkTo, linkName }) {
    return <RouterLink to={linkTo}>{linkName}</RouterLink>;
}

export default Link;
