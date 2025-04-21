import Image from "next/image"
import Link from "next/link"
import { MapPin, Compass, Eye, ChevronRight, Building2, Cpu, Microscope, Users } from "lucide-react"

export default function KhamPhaPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl shadow-lg">
        <div className="absolute inset-0">
          <Image
            src="/images/facilities/main-building.jpg"
            alt="Tòa nhà chính Khoa CNTT"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 p-8 md:p-12 lg:p-16 min-h-[400px] flex flex-col justify-end">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl drop-shadow-md">
            Khám phá không gian học tập và nghiên cứu hiện đại
          </h2>
          <p className="text-white text-lg max-w-2xl mb-6 drop-shadow-md">
            Trải nghiệm cơ sở vật chất tiên tiến và môi trường học tập đẳng cấp của Khoa Công nghệ Thông tin - Trường
            Đại học Hàng hải Việt Nam
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/kham-pha/ban-do"
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition shadow-lg hover:shadow-primary-500/20"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Bản đồ tương tác
            </Link>
            <Link
              href="/kham-pha/tour-ao"
              className="inline-flex items-center px-6 py-3 bg-white/90 hover:bg-white text-primary-700 rounded-lg transition backdrop-blur-sm shadow-lg"
            >
              <Compass className="mr-2 h-5 w-5" />
              Tour ảo 360°
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-500/50 transition group shadow-sm hover:shadow-md">
          <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition">
            <Building2 className="h-6 w-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Cơ sở vật chất</h3>
          <p className="text-gray-600 mb-4">
            Khám phá các phòng học, thư viện và không gian học tập hiện đại của Khoa CNTT
          </p>
          <Link
            href="/gioi-thieu/co-so-vat-chat"
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            Tìm hiểu thêm <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-500/50 transition group shadow-sm hover:shadow-md">
          <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition">
            <Cpu className="h-6 w-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Phòng thí nghiệm</h3>
          <p className="text-gray-600 mb-4">
            Tham quan các phòng lab với trang thiết bị hiện đại phục vụ học tập và nghiên cứu
          </p>
          <Link
            href="/bo-mon/phong-thi-nghiem"
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            Tìm hiểu thêm <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-500/50 transition group shadow-sm hover:shadow-md">
          <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition">
            <Microscope className="h-6 w-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Không gian nghiên cứu</h3>
          <p className="text-gray-600 mb-4">Khám phá các không gian nghiên cứu khoa học và phát triển công nghệ</p>
          <Link href="/nghien-cuu" className="inline-flex items-center text-primary-600 hover:text-primary-700">
            Tìm hiểu thêm <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-500/50 transition group shadow-sm hover:shadow-md">
          <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition">
            <Users className="h-6 w-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Đời sống sinh viên</h3>
          <p className="text-gray-600 mb-4">
            Trải nghiệm không gian học tập, sinh hoạt và các hoạt động ngoại khóa của sinh viên
          </p>
          <Link
            href="/sinh-vien/hoat-dong"
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            Tìm hiểu thêm <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </section>

      {/* Explore Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-500/30 transition group shadow-md hover:shadow-lg">
          <div className="relative h-64">
            <Image
              src="/images/campus/aerial-view.jpg"
              alt="Bản đồ khuôn viên trường"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 bg-primary-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium">
              Bản đồ tương tác
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Bản đồ tương tác</h3>
            <p className="text-gray-600 mb-4">
              Khám phá khuôn viên trường và các cơ sở của Khoa CNTT thông qua bản đồ tương tác. Tìm hiểu vị trí các tòa
              nhà, phòng học, phòng lab và các tiện ích.
            </p>
            <Link
              href="/kham-pha/ban-do"
              className="inline-flex items-center px-5 py-2.5 bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-lg transition"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Khám phá bản đồ
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-500/30 transition group shadow-md hover:shadow-lg">
          <div className="relative h-64">
            <Image
              src="/images/labs/computer-lab.jpg"
              alt="Tour ảo phòng lab"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 bg-primary-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium">
              Tour ảo 360°
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Tour ảo 360°</h3>
            <p className="text-gray-600 mb-4">
              Trải nghiệm không gian học tập và nghiên cứu của Khoa CNTT thông qua tour ảo 360°. Tham quan các phòng
              học, phòng lab và các khu vực chung như thể bạn đang ở đó.
            </p>
            <Link
              href="/kham-pha/tour-ao"
              className="inline-flex items-center px-5 py-2.5 bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-lg transition"
            >
              <Eye className="mr-2 h-4 w-4" />
              Trải nghiệm tour ảo
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Thư viện hình ảnh</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative aspect-square rounded-lg overflow-hidden group shadow-md">
            <Image
              src="/images/facilities/classroom.jpg"
              alt="Phòng học"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-3">
              <span className="text-white text-sm font-medium">Phòng học hiện đại</span>
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden group shadow-md">
            <Image
              src="/images/labs/equipment-lab.jpg"
              alt="Phòng thí nghiệm"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-3">
              <span className="text-white text-sm font-medium">Phòng thí nghiệm</span>
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden group shadow-md">
            <Image
              src="/images/facilities/library.jpg"
              alt="Thư viện"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-3">
              <span className="text-white text-sm font-medium">Thư viện</span>
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden group shadow-md">
            <Image
              src="/images/students/students-studying.jpg"
              alt="Sinh viên học tập"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-3">
              <span className="text-white text-sm font-medium">Không gian học tập</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
