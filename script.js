/**
 * BƯỚC 1: KHỞI TẠO CƠ SỞ DỮ LIỆU (DATABASE GIẢ LẬP)
 * Sử dụng Mảng (Array) chứa các Đối tượng (Object). Mỗi Object là 1 sản phẩm/người.
 */

const COACHES = [
    {
        name: "HLV Trưởng Huỳnh Hữu Phước",
        desc: "Cựu tuyển thủ quốc gia. Với hơn nửa thế kỷ gắn bó cùng cầu lông, từng là Á quân đơn nam Giải Vô địch Quốc gia, kinh nghiệm huấn luyện đội tuyển quốc gia và đào tạo nhiều vận động viên thành tích cao, cùng việc được cấp 2 chứng chỉ huấn luyện quốc tế từ BWF và IOC (Olympic).",
        img: "img/img.hhp.png"
    },
    {
        name: "HLV Trần Bá Hoài",
        desc: "Anh Bá Hoài tốt nghiệp Đại học Thể dục Thể thao chuyên ngành cầu lông. Ngoài ra, anh còn tận tụy với nghề và là một giáo viên dạy cầu lông nổi tiếng tại TPHCM.",
        img: "img/img.bht.png"
    },
    {
        name: "HLV Phạm Hồng Nam",
        desc: " Là vận động viên cầu lông nổi bật của đội tuyển quốc gia Việt Nam. Theo học tại Trường Phổ thông Năng khiếu Thể dục Thể thao Hà Nội và trưởng thành từ Câu lạc bộ Cầu lông Ciputra Hà Nội. Giành nhiều huy chương tại các giải quốc gia, các giải quốc tế trẻ và là gương mặt quen thuộc thi đấu ở các kỳ SEA Games. ",
        img: "img/3203201676265270392274192665218071502079968n-16808581107661123411426.webp"
    },

];

const SERVICES_COURSES = [
    
    {
        title: "Khóa Basic Trắng Gói",
        desc: "12 buổi hướng dẫn cầm vợt, di chuyển 6 góc và các kỹ thuật phông, gài lưới cơ bản. Tặng áo tập BLAB.",
        price: "1.500.000 VNĐ / Khóa",
        img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=500"
    },
    
    {
        title: "Khóa Basic Trắng Gói",
        desc: "12 buổi hướng dẫn cầm vợt, di chuyển 6 góc và các kỹ thuật phông, gài lưới cơ bản. Tặng áo tập BLAB.",
        price: "1.500.000 VNĐ / Khóa",
        img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=500"
    },

    {
        title: "Khóa Basic Trắng Gói",
        desc: "12 buổi hướng dẫn cầm vợt, di chuyển 6 góc và các kỹ thuật phông, gài lưới cơ bản. Tặng áo tập BLAB.",
        price: "1.500.000 VNĐ / Khóa",
        img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=500"
    },

    
];

const SHOP_ITEMS = [
    {
        title: "Vợt BLAB Worldwide Pro",
        desc: "Dòng vợt độc quyền thiết kế thân trắng nhám, nặng đầu, trợ lực hoàn hảo cho những cú Smash nổ sân.",
        price: "3.250.000 VNĐ",
        img: "https://images.unsplash.com/photo-1613564834644-a17084898636?auto=format&fit=crop&q=80&w=500"
    },
    {
        title: "Vợt BLAB Worldwide Pro",
        desc: "Dòng vợt độc quyền thiết kế thân trắng nhám, nặng đầu, trợ lực hoàn hảo cho những cú Smash nổ sân.",
        price: "3.250.000 VNĐ",
        img: "https://images.unsplash.com/photo-1613564834644-a17084898636?auto=format&fit=crop&q=80&w=500"
    },
    {
        title: "Vợt BLAB Worldwide Pro",
        desc: "Dòng vợt độc quyền thiết kế thân trắng nhám, nặng đầu, trợ lực hoàn hảo cho những cú Smash nổ sân.",
        price: "3.250.000 VNĐ",
        img: "https://images.unsplash.com/photo-1613564834644-a17084898636?auto=format&fit=crop&q=80&w=500"
    },
    {
        title: "Giày Yonex Aerus Z White",
        desc: "Mẫu giày siêu nhẹ bọc da trắng nguyên khối, công nghệ Power Cushion+ chống lật cổ chân.",
        price: "3.800.000 VNĐ",
        img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=500"
    }
];

/**
 * BƯỚC 2: HÀM ĐƯA DỮ LIỆU LÊN GIAO DIỆN (RENDER DOM)
 */
function renderData() {
    // 1. Tạo giao diện cho Huấn luyện viên
    const coachContainer = document.getElementById('coaches-grid');
    COACHES.forEach(coach => {
        // Dấu `` (Template Literal) giúp nhúng thẳng HTML và biến JS vào nhau
        coachContainer.innerHTML += `
            <div class="card">
                <img src="${coach.img}" alt="${coach.name}">
                <div class="card-content">
                    <h3>${coach.name}</h3>
                    <p class="card-desc">${coach.desc}</p>
                </div>
            </div>
        `;
    });

    // 2. Tạo giao diện Khóa học & Dịch vụ
    const serviceContainer = document.getElementById('services-grid');
    SERVICES_COURSES.forEach(item => {
        serviceContainer.innerHTML += `
            <div class="card">
                <img src="${item.img}" alt="${item.title}">
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <p class="card-desc">${item.desc}</p>
                    <p class="card-price">${item.price}</p>
                </div>
            </div>
        `;
    });

    // 3. Tạo giao diện Shop
    const shopContainer = document.getElementById('shop-grid');
    SHOP_ITEMS.forEach(product => {
        shopContainer.innerHTML += `
            <div class="card">
                <img src="${product.img}" alt="${product.title}">
                <div class="card-content">
                    <h3>${product.title}</h3>
                    <p class="card-desc">${product.desc}</p>
                    <p class="card-price">${product.price}</p>
                    <button class="btn-primary" style="padding: 8px 15px; margin-top: 10px; width:100%">Xem Chi Tiết</button>
                </div>
            </div>
        `;
    });
}

/**
 * BƯỚC 3: XỬ LÝ SỰ KIỆN GỬI FORM ĐĂNG KÝ
 */
document.getElementById('registerForm').addEventListener('submit', function(e) {
    // e.preventDefault() là lệnh cực kỳ quan trọng, chặn web tự động load lại khi nhấn nút Submit
    e.preventDefault();

    // Thu thập dữ liệu khách nhập
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let msgBox = document.getElementById('form-msg');

    // Hiện thông báo đang xử lý
    msgBox.style.color = "var(--text-muted)";
    msgBox.innerHTML = "Đang gửi hồ sơ...";

    // Dùng setTimeout giả lập thời gian server mạng xử lý (1 giây)
    setTimeout(() => {
        // Trả về kết quả thành công
        msgBox.style.color = "#2e7d32"; // Xanh lá cây
        msgBox.innerHTML = `✅ Xin chào <b>${name}</b> (${phone}). BLAB WORLDWIDE đã nhận được thông tin. Ban quản lý sẽ liên hệ bạn sớm nhất!`;
        
        // Reset form cho trống trơn
        document.getElementById('registerForm').reset();
    }, 1000);
});

// BƯỚC 4: KÍCH HOẠT CHẠY CODE
// Lắng nghe sự kiện 'DOMContentLoaded': Khi HTML load xong thì mới bắt đầu chạy hàm renderData
window.addEventListener('DOMContentLoaded', renderData);