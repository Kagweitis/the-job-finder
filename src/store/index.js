import { createStore } from "vuex";
import router from "../routes";
import { auth } from "../firebase"
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'


export default createStore({
    state: {
        user: null
    },
    mutations: {
        SET_USER (state, user) {
            state.user = user
        },
        CLEAR_USER (state) {
            state.user = null
        }
    },
    actions: {
        async login ({ commit }, details) {
            const { email, password } = details
            try {
                await signInWithEmailAndPassword (auth, email, password)
            } catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        alert("user not found")
                        break;
                    case 'auth/wrong-password':
                        alert("wrong password")
                        break;
                    default:
                        alert('something went wrong')
                        break;
                }
            return
            }

            commit('SET_USER', auth.currentUser)
            console.log('get ready to route!');
            router.push('/home')
            return
        },
        async register ({ commit }, details) {
            const { name, email, password } = details

            try {
                await createUserWithEmailAndPassword (auth, email, password)
            } catch (error) {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        alert("email in use")
                        break;
                    case 'auth/invalid-email':
                        alert("invalid email")
                        break;
                    case 'auth/weak-password':
                        alert("weak password")
                        break;
                    default:
                        alert('something went wrong')
                        break;
                }
            return
            }

            commit('SET_USER', auth.currentUser)
            router.push('/home')
        },
        async logout ({ commit }) {
            await signOut(auth)

            commit('CLEAR_USER')

            router.push('/Landing')
        }
    }
})