import { Link } from 'react-router-dom';
import StyledMenuButton from './style';

function MenuButton() {
    return (
        <StyledMenuButton>
            <Link to="/"/>
            <Link to="/login"/>
            <Link to="/register"/>
            <Link to="/profile"/>
            <Link to="/register"/>
            <Link to="/adverts"/>
        </StyledMenuButton>
    )
}
export default MenuButton