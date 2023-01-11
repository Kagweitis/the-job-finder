import { createStore } from "vuex";
import router from "../routes";
import { auth } from "../firebase"
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signout
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
                        alert(error.message)
                        break;
                }
            }
        },
        async register ({ commit }, details) {

        },
        async logout ({ commit }) {

        }
    }
})