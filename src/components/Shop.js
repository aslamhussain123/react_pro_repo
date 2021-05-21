
import React, {useState} from 'react';
import Tweet from './Tweets';
function Shop() {
    const [users, setUsers] = useState([
        { name: 'Aslam hucen', message: 'Footballer', title: 'skardu' },
        { name: 'Nouman legend', message: 'Singer', title: 'the legend' },
        { name: ' asrf', message: 'SEO', title: 'karak' },
        { name: 'nadeem', message: 'UI/UX', title: 'Kohat' }
    ]);
    return (
        <div className="tweet__app">
            {/* <Tweet name="Aslam Balti" message="WE are Friend" title="4ever" />
            <Tweet name="Ashraf Khan" message="WE are Friend" title="4ever" />
            <Tweet name="Nouman Khan the legend" message="WE are Friend" title="4ever" />
            <Tweet name="Nadeem WHO" message="WE are Friend" title="4ever" /> */}
      {users.map(user =>(
          <Tweet name={user.name} message={user.message} title={user.title}/>
      ))}
        </div>
    )
}
export default Shop;