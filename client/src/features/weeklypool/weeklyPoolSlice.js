import { createSlice } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFullWeekSchedule = createAsyncThunk(
    'weeklyPool/getFullWeekSchedule',
    async (week) => {
        const response = await fetch(baseUrl + week);
        if (!response.ok) {
            return Promise.reject(response.status);
        }
		const data = await response.json();
		console.log(data)
		return data;
    }
);

export const getFullSchedule = createAsyncThunk(
    'weeklyPool/getFullSchedule',
    async (week) => {
        const response = await fetch(baseUrl + 'schedule/2023');
        if (!response.ok) {
            return Promise.reject(response.status);
        }
		const data = await response.json();
		console.log(data)
		return data;
    }
);

const initialState = {
	currentWeek: null,
	allWeeks: [],
	currentYear: 2023
}

const weeklyPoolSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCurrentWeek: (state, action) => {
			return {
				...state,
				currentWeek: action.payload
			}
		}
	}, 
	extraReducers: {
		[getFullWeekSchedule.pending]: (state) => {
            state.isLoading = true;
        },
        [getFullWeekSchedule.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.currentWeek = action.payload;
        },
        [getFullWeekSchedule.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
		},
		[getFullSchedule.pending]: (state) => {
            state.isLoading = true;
        },
        [getFullSchedule.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.allWeeks = action.payload;
        },
        [getFullSchedule.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
		[getFullWeekSchedule.rejected]: (state, action) => {
            alert(
                'Registration Fail\nError: ' +
                    (action.error ? action.error.message : 'Fetch failed')
            );
        }
	}
});

export const userReducer = weeklyPoolSlice.reducer;

export const {setCurrentWeek} = weeklyPoolSlice.actions;

export const selectCurrentWeek = (state) => {
	return state.user.currentUser;
};