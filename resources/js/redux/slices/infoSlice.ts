import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type WebInfoType = {
  diaChi?: string;
  email?: string;
  soDienThoai?: string;
  nganHang?: {
    soTaiKhoan?: string;
    chuTaiKhoan?: string;
    chiNhanh?: string;
  };
};
const initialState: WebInfoType = {
  soDienThoai: '0936.296.164',
  diaChi: 'Phú Lương, Hà Đông, Hà Nội',
  email: 'huythaia123@gmail.com',
  nganHang: {
    soTaiKhoan: '0368301702',
    chuTaiKhoan: 'PHAN HUY THAI',
    chiNhanh: 'MB Văn Phú',
  },
};

export const infoSlice = createSlice({
  name: 'webInfo',
  initialState,
  reducers: {
    setWebInfo: (state, action: PayloadAction<WebInfoType>) => {
      state.diaChi = action.payload.diaChi;
      state.email = action.payload.email;
      state.soDienThoai = action.payload.soDienThoai;
      state.nganHang = action.payload.nganHang;
    },
  },
});

export const { setWebInfo } = infoSlice.actions;
const webInfoReducer = infoSlice.reducer;
export default webInfoReducer;
