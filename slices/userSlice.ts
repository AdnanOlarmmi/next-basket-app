import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
	'users/fetchUsers',
	async (thunkApi) => {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/users?_limit=5'
		);
		const data = response.json();
		return data;
	}
);

const initialState = {
	entities: [],
	// value: 10,
} as any;

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		// login: (state, action) => {
		// 	state.user = action.payload;
		// },
		// logout: (state) => {
		// 	state.user = null;
		// },
		increment: (state, action) => {
			// state.value += action.payload;
			// state.value++;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			// state.entities = action.payload;
			state.entities.push(...action.payload);
		});
	},
});

export default userSlice.reducer;
