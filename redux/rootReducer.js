import { combineReducers } from "redux";
import { menuReducer } from "../redux/Menu/reducer";
import { chiTietTuyenDungReducer } from "../redux/ChiTietTuyenDung/reducer";
import { camKetTuyenDungReducer } from "../redux/CamKetTuyenDung/reducer"
import { sinhVienTuyenDungReducer } from "../redux/SinhVienThucHien/reducer"
import { phucLoiTuyenDungReducer } from "../redux/PhucLoiTuyenDung/reducer"
import { ungTuyenNgayReducer } from "../redux/UngTuyenNgay/reducer"
import { khoaReducer } from "../redux/Khoa/reducer"
import { viTriUngTuyenReducer } from "../redux/ViTriUngTuyen/reducer"
import { hinhThucUngTuyenReducer } from "../redux/HinhThucUngTuyen/reducer"
import { taiKhoanReducer } from "../redux/TaiKhoan/reducer"
import { videoReducer } from "../redux/Video/reducer"
import { newReducer } from "../redux/New/reducer"

const rootReducer = combineReducers({
  menuReducer,
  chiTietTuyenDungReducer,
  camKetTuyenDungReducer,
  sinhVienTuyenDungReducer,
  phucLoiTuyenDungReducer,
  ungTuyenNgayReducer,
  khoaReducer,
  viTriUngTuyenReducer,
  hinhThucUngTuyenReducer,
  taiKhoanReducer,
  videoReducer,
  newReducer
});

export default rootReducer;
