# Hướng dẫn sử dụng Constants

Tài liệu này cung cấp hướng dẫn chi tiết về cách đặt tên, tổ chức và sử dụng constants trong dự án website Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam.

## Quy ước đặt tên

### Tên biến constants

- Sử dụng **SCREAMING_SNAKE_CASE** (chữ in hoa và gạch dưới) cho tất cả các constants
- Tên biến phải mô tả rõ ràng mục đích sử dụng
- Thêm tiền tố để phân loại constants (nếu cần)

\`\`\`typescript
// Đúng
const MAX_ITEMS_PER_PAGE = 10;
const API_BASE_URL = 'https://api.example.com';
const EDUCATION_PROGRAMS = [...];

// Sai
const maxItems = 10;
const baseUrl = 'https://api.example.com';
const programs = [...];
\`\`\`

### Tiền tố cho constants

Sử dụng tiền tố để phân loại constants theo module hoặc chức năng:

\`\`\`typescript
// Constants cho module giáo dục
const EDUCATION_PROGRAMS = [...];
const EDUCATION_LEVELS = [...];

// Constants cho module nghiên cứu
const RESEARCH_CATEGORIES = [...];
const RESEARCH_TYPES = [...];
\`\`\`

### Tên file constants

- Sử dụng **kebab-case** cho tên file
- Đặt tên file theo module hoặc chức năng
- Đặt các file constants trong thư mục `src/lib/constants`

\`\`\`
src/lib/constants/
├── education.ts
├── research.ts
├── navigation.ts
├── api-endpoints.ts
└── ...
\`\`\`

## Tổ chức constants

### Phân loại theo module

Tổ chức constants theo module hoặc chức năng:

\`\`\`typescript
// src/lib/constants/education.ts
export const EDUCATION_PROGRAMS = [...];
export const EDUCATION_LEVELS = [...];
export const EDUCATION_COURSES = [...];

// src/lib/constants/research.ts
export const RESEARCH_CATEGORIES = [...];
export const RESEARCH_TYPES = [...];
\`\`\`

### Constants phức tạp

Đối với constants phức tạp (objects, arrays), sử dụng TypeScript interfaces hoặc types để định nghĩa cấu trúc:

\`\`\`typescript
// Định nghĩa type
export type Program = {
  id: string;
  name: string;
  description: string;
  courses: Course[];
};

// Sử dụng type cho constants
export const EDUCATION_PROGRAMS: Program[] = [
  {
    id: 'cntt',
    name: 'Công nghệ thông tin',
    description: '...',
    courses: [...]
  },
  // ...
];
\`\`\`

## Export và Import

### Export constants

- Sử dụng **named exports** cho tất cả các constants
- Không sử dụng default export cho file constants
- Export tất cả các constants cần thiết

\`\`\`typescript
// src/lib/constants/education.ts
export const EDUCATION_PROGRAMS = [...];
export const EDUCATION_LEVELS = [...];

// Export alias nếu cần thiết (để duy trì tính tương thích)
export const PROGRAMS = EDUCATION_PROGRAMS;
\`\`\`

### Import constants

- Import cụ thể các constants cần sử dụng
- Sử dụng alias nếu cần thiết để tránh xung đột tên

\`\`\`typescript
// Import cụ thể
import { EDUCATION_PROGRAMS } from '@/lib/constants/education';

// Sử dụng alias nếu cần
import { EDUCATION_PROGRAMS as PROGRAMS } from '@/lib/constants/education';
\`\`\`

### Re-export constants

Nếu cần re-export constants từ một file khác, sử dụng cú pháp sau:

\`\`\`typescript
// src/lib/constants/index.ts
export * from './education';
export * from './research';
\`\`\`

## Best Practices

### Không thay đổi giá trị constants

Constants phải là immutable. Sử dụng `const` và không thay đổi giá trị của constants sau khi đã định nghĩa:

\`\`\`typescript
// Đúng
const EDUCATION_PROGRAMS = [...];

// Sai
EDUCATION_PROGRAMS.push(newProgram); // Không thay đổi constants
\`\`\`

### Sử dụng Object.freeze

Đối với objects hoặc arrays phức tạp, sử dụng `Object.freeze` để đảm bảo tính immutable:

\`\`\`typescript
export const EDUCATION_PROGRAMS = Object.freeze([
  { id: 'cntt', name: 'Công nghệ thông tin' },
  { id: 'ktpm', name: 'Kỹ thuật phần mềm' }
]);
\`\`\`

### Tránh magic numbers/strings

Luôn sử dụng constants thay vì hardcoding giá trị:

\`\`\`typescript
// Đúng
const MAX_ITEMS_PER_PAGE = 10;
function fetchItems(page: number) {
  return api.get(`/items?limit=${MAX_ITEMS_PER_PAGE}&page=${page}`);
}

// Sai
function fetchItems(page: number) {
  return api.get(`/items?limit=10&page=${page}`); // Magic number
}
\`\`\`

### Documentation

Thêm JSDoc comments cho constants phức tạp để giải thích mục đích và cách sử dụng:

\`\`\`typescript
/**
 * Danh sách các chương trình đào tạo của khoa CNTT
 * @property id - Mã chương trình
 * @property name - Tên chương trình
 * @property description - Mô tả chương trình
 */
export const EDUCATION_PROGRAMS = [...];
\`\`\`

## Ví dụ thực tế

### Ví dụ 1: Constants cho navigation

\`\`\`typescript
// src/lib/constants/navigation.ts
export const MAIN_NAVIGATION = [
  {
    title: 'Trang chủ',
    href: '/',
  },
  {
    title: 'Giới thiệu',
    href: '/gioi-thieu',
    children: [
      {
        title: 'Lịch sử',
        href: '/gioi-thieu/lich-su',
      },
      {
        title: 'Tầm nhìn sứ mệnh',
        href: '/gioi-thieu/tam-nhin-su-menh',
      },
    ],
  },
  // ...
];
\`\`\`

### Ví dụ 2: Constants cho API endpoints

\`\`\`typescript
// src/lib/constants/api-endpoints.ts
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.vimaru.edu.vn';

export const API_ENDPOINTS = {
  RESEARCH: `${API_BASE_URL}/research`,
  EDUCATION: `${API_BASE_URL}/education`,
  NEWS: `${API_BASE_URL}/news`,
  EVENTS: `${API_BASE_URL}/events`,
};
\`\`\`

### Ví dụ 3: Constants cho form validation

\`\`\`typescript
// src/lib/constants/validation.ts
export const VALIDATION_RULES = {
  EMAIL: {
    REQUIRED: 'Email là bắt buộc',
    PATTERN: 'Email không hợp lệ',
  },
  PASSWORD: {
    REQUIRED: 'Mật khẩu là bắt buộc',
    MIN_LENGTH: 'Mật khẩu phải có ít nhất 8 ký tự',
    PATTERN: 'Mật khẩu phải chứa ít nhất một chữ hoa, một chữ thường và một số',
  },
};
\`\`\`

## Kiểm tra và đảm bảo tuân thủ

### ESLint Rules

Thêm ESLint rules để đảm bảo tuân thủ quy ước đặt tên constants:

\`\`\`json
{
  "rules": {
    "naming-convention": [
      "error",
      {
        "selector": "variable",
        "modifiers": ["const", "global"],
        "format": ["UPPER_CASE"]
      }
    ]
  }
}
\`\`\`

### Code Review

Trong quá trình code review, đảm bảo kiểm tra:

1. Constants được đặt tên theo quy ước SCREAMING_SNAKE_CASE
2. Constants được tổ chức trong các file phù hợp
3. Constants được export/import đúng cách
4. Constants không bị thay đổi giá trị sau khi định nghĩa
