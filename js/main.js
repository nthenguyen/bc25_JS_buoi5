//b1
const KHUVUC_A = 2;
const KHUVUC_B = 1;
const KHUVUC_C = 0.5;
const DT_1 = 2.5;
const DT_2 = 1.5;
const DT_3 = 1;
document.getElementById("btnTinh").onclick = function () {
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var diem_1 = document.getElementById("d1").value * 1;
  var diem_2 = document.getElementById("d2").value * 1;
  var diem_3 = document.getElementById("d3").value * 1;
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = document.getElementById("doiTuong").value * 1;
  var a = khuVucUuTien(khuVuc);
  var b = doiTuongUuTien(doiTuong);
  var diemUuTien = a + b;
  var diemTong = diemTK(diem_1, diem_2, diem_3, diemUuTien);
  var content = "";

  if (diemChuan <= 0) {
    content = '<div class="alert alert-success"><p>Sai điểm chuẩn</p></div>';
  } else if (!diemTong) {
    content = '<div class="alert alert-success"><p>Sai điểm thi</p></div>';
  } else if (
    !(khuVuc === "A" || khuVuc === "B" || khuVuc === "C" || khuVuc === "X")
  ) {
    content = '<div class="alert alert-success"><p>Sai khu vực</p></div>';
  } else if (
    !(doiTuong == 1 || doiTuong == 2 || doiTuong == 3 || doiTuong == 0)
  ) {
    content = '<div class="alert alert-success"><p>Sai đối tượng</p></div>';
  } else if (
    diemTong >= diemChuan &&
    diem_1 !== 0 &&
    diem_2 !== 0 &&
    diem_3 !== 0 &&
    diemUuTien >= 0
  ) {
    content =
      '<div class="alert alert-success"><p>Trúng tuyển. Tổng điểm: ' +
      diemTong +
      "</p></div>";
  } else {
    content =
      '<div class="alert alert-success"><p>Rớt. Tổng điểm: ' +
      diemTong +
      "</p></div>";
  }
  document.getElementById("thongbao1").innerHTML = content;

  return diemTong;
};
function diemTK(d1, d2, d3, uuTien) {
  var kq = 0;
  var validateDiem = d1 >= 0 && d2 >= 0 && d3 >= 0;
  if (validateDiem) {
    kq = d1 + d2 + d3 + uuTien;
  }
  return kq;
}
function khuVucUuTien(khuvuc) {
  var diemKhuVuc = 0;
  if (khuvuc === "A") diemKhuVuc = KHUVUC_A;
  else if (khuvuc === "B") diemKhuVuc = KHUVUC_B;
  else if (khuvuc === "C") diemKhuVuc = KHUVUC_C;
  else if (khuvuc === "X") return diemKhuVuc;
  return diemKhuVuc;
}
function doiTuongUuTien(doituong) {
  var diemDoiTuong = 0;
  if (doituong == 1) diemDoiTuong = DT_1;
  else if (doituong == 2) diemDoiTuong = DT_2;
  else if (doituong == 3) diemDoiTuong = DT_3;
  else if (doituong == 0) return diemDoiTuong;
  return diemDoiTuong;
}

//b2
const KW = 500; //0-50kw
const KW_50 = 650; //51-100kw
const KW_100 = 850; //101-200kw
const KW_200 = 1100; //201-350kw
const KW_PLUS = 1300; //351+
const BILL_50 = 50 * KW; //tong tien khi 50
const BILL_100 = 50 * KW_50 + BILL_50; //tong tien khi 100
const BILL_200 = 100 * KW_100 + BILL_100; //tong tien khi 200
const BILL_PLUS = 150 * KW_200 + BILL_200; //tong tien khi 350

const formatVND = new Intl.NumberFormat("vn-VN").format;
function donGia(kw) {
  let res;
  if (kw > 0 && kw < 51) res = kw * KW;
  else if (kw > 50 && kw < 101) res = (kw - 50) * KW_50 + BILL_50;
  else if (kw > 100 && kw < 201) res = (kw - 100) * KW_100 + BILL_100;
  else if (kw > 200 && kw < 351) res = (kw - 200) * KW_200 + BILL_200;
  else if (kw > 350) res = (kw - 350) * KW_PLUS + BILL_PLUS;
  else res = "Sai kw";
  return res;
}
function inHoaDon(ten, soKw) {
  return (
    "Hóa đơn của " +
    ten +
    " với " +
    soKw +
    " kw là " +
    formatVND(donGia(soKw)) +
    "đ"
  );
}
document.getElementById("btnTinh2").onclick = function () {
  var ten = document.getElementById("ten").value;
  var kw = document.getElementById("kw").value * 1;
  var inhoadon = inHoaDon(ten, kw);
  document.getElementById("thongbao2").innerHTML =
    '<div class="alert alert-success"><p>' + inhoadon + "</p></div>";
};
