export const imageSources = {
  // Các nguồn ảnh chính thức
  official: ["https://vimaru.edu.vn/", "https://tuyensinh.vimaru.edu.vn/", "https://fit.vimaru.edu.vn/"],

  // Các từ khóa tìm kiếm
  searchTerms: [
    "Đại học Hàng hải Việt Nam",
    "Vietnam Maritime University",
    "VMU campus",
    "Khoa CNTT Đại học Hàng hải",
    "VMU Faculty of Information Technology",
  ],

  // Các loại ảnh cần thu thập
  imageTypes: [
    {
      type: "hero",
      description: "Ảnh toàn cảnh trường, tòa nhà chính, cổng trường",
      minDimensions: "1920x1080px",
      format: "jpg/png",
    },
    {
      type: "facilities",
      description: "Phòng học, thư viện, khu thể thao, ký túc xá",
      minDimensions: "800x600px",
      format: "jpg/png",
    },
    {
      type: "labs",
      description: "Phòng máy tính, phòng thí nghiệm CNTT",
      minDimensions: "800x600px",
      format: "jpg/png",
    },
    {
      type: "partners",
      description: "Logo đối tác của khoa CNTT",
      minDimensions: "200x100px",
      format: "png (nền trong suốt)",
    },
  ],
}
