import Leslie from '../../../../assets/images/leslie.png';
import Ron from '../../../../assets/images/ron.png';
import April from '../../../../assets/images/april.png';
import Donna from '../../../../assets/images/donna.png';
import garry from '../../../../assets/images/garry.png';
import jeanralphio from '../../../../assets/images/jean-ralphio.png';
import tom from '../../../../assets/images/tom.png';
import citizen from '../../../../assets/images/pawnee.png';

const users = [
  { id: 'user1', name: 'Leslie Knope', img: `${Leslie}` },
  { id: 'user2', name: 'Ron Swanson', img: `${Ron}` },
  { id: 'user3', name: 'Garry Gergich', img: `${garry}` },
  { id: 'user4', name: 'April Ludgate', img: `${April}` },
  { id: 'user5', name: 'Jean Ralphio', img: `${jeanralphio}` },
  { id: 'user6', name: 'Tom Haverford', img: `${tom}` },
  { id: 'user7', name: 'Donna Meagle', img: `${Donna}` },
  { id: 'user8', name: 'Pawnee Citizen', img: `${citizen}` },
];

const getUsers = () => users;

export default { getUsers };
