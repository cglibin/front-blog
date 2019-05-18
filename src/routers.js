
import homePage from './components/homePage.vue'
import detail from './components/detail.vue'
export default[
	{path:"/",component:homePage},
	{path:"/blog/:id",component:detail}
]