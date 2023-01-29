import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar/Sidebar';


function App() {

	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post
						author="Thiago"
						content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo aspernatur provident, esse sequi corrupti qui fugit.
                        Eveniet at voluptatem architecto, commodi perferendis suscipit, magnam harum, aperiam voluptatum fuga praesentium earum?"
					/>
				</main>
			</div>

		</>
	);
}

export default App;
