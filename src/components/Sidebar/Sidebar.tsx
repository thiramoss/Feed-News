import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export function Sidebar(){
	return(
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt=""
			/>
			<div className={styles.profile}>
				<img className={styles.avatar} src="https://avatars.githubusercontent.com/u/27020072?v=4" />

				<strong>Thiago Ramos</strong>
				<span>Engenheiro de Software</span>
			</div>
			<footer>

				<a href="">
					<PencilLine size={20}/>
                    Editar perfil
				</a>
			</footer>
		</aside>
	);
}
