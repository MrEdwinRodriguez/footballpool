import { createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user, { dispatch }) => {
        const response = await fetch(baseUrl + 'users/signup', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            return Promise.reject(response.status);
        }
		const data = await response.json();
		console.log(data)
		return 'success';
        // dispatch(addComment(data));
    }
);

const initialState = {
	currentUser: null
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCurrentUser: (state, action) => {
			return {
				...state,
				currentUser: action.payload
			}
		}
	}, 
	extraReducers: {
		[registerUser.rejected]: (state, action) => {
            alert(
                'Registration Fail\nError: ' +
                    (action.error ? action.error.message : 'Fetch failed')
            );
        }
	}
});

export const userReducer = userSlice.reducer;

export const {setCurrentUser} = userSlice.actions;

export const selectCurrentUser = (state) => {
	return state.user.currentUser;
};