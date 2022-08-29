import { all, call } from "redux-saga/effects";
import { watchingCamKetTuyenDung } from "./CamKetTuyenDung/saga";
import { watchingChiTietTuyenDung } from "./ChiTietTuyenDung/saga";
import { watchingGetDataMenu } from "./Menu/saga";
import { watchingSinhVienTuyenDung } from "./SinhVienThucHien/saga";
import { watchingPhucLoiTuyenDung } from "./PhucLoiTuyenDung/saga";
import { watchingUngTuyenNgay } from "./UngTuyenNgay/saga";
import { watchingKhoa } from "./Khoa/saga";
import { watchingViTriUngTuyen } from "./ViTriUngTuyen/saga";
import { watchingHinhThucUngTuyen } from "./HinhThucUngTuyen/saga";
import { watchingTaiKhoan } from "./TaiKhoan/saga";
import { watchingGetAllVideo } from "./Video/saga";
import { watchingGetNew } from "./New/saga";


// call saga nào thfi định nghĩa ở đây nhé
export default function* rootSaga() {
  yield all([
    call(watchingGetDataMenu),
    call(watchingChiTietTuyenDung),
    call(watchingCamKetTuyenDung),
    call(watchingSinhVienTuyenDung),
    call(watchingPhucLoiTuyenDung),
    call(watchingUngTuyenNgay),
    call(watchingKhoa),
    call(watchingViTriUngTuyen),
    call(watchingHinhThucUngTuyen),
    call(watchingTaiKhoan),
    call(watchingGetAllVideo),
    call(watchingGetNew)
  ]);
}
