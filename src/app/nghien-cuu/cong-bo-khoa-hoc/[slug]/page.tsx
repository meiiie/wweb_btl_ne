import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Thêm generateMetadata để tạo metadata động dựa trên slug
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Trong thực tế, bạn sẽ fetch dữ liệu dựa trên slug
  // Ở đây chúng ta giả định dữ liệu từ publication

  return {
    title: `${publication.title} | Công bố khoa học | Khoa CNTT`,
    description: publication.abstract.substring(0, 160) + "...",
    keywords: [
      ...publication.keywords.map((k) => k.toLowerCase()),
      "công bố khoa học",
      "bài báo khoa học",
      "Đại học Hàng hải Việt Nam",
    ].join(", "),
    openGraph: {
      title: publication.title,
      description: publication.abstract.substring(0, 160) + "...",
      type: "article",
      publishedTime: `${publication.year}-${publication.month || "01"}-01`,
      authors: publication.authors.map((author) => author.name),
      tags: publication.keywords,
    },
    alternates: {
      canonical: `https://fit.vimaru.edu.vn/nghien-cuu/cong-bo-khoa-hoc/${params.slug}`,
    },
  }
}

// Dữ liệu mẫu cho một công bố khoa học
const publication = {
  id: 1,
  title: "A Novel Approach for Traffic Congestion Detection Using Deep Learning and IoT Sensors",
  authors: [
    {
      name: "Nguyễn Văn A",
      affiliation: "Khoa Công nghệ Thông tin, Trường Đại học Hàng hải Việt Nam",
      email: "nguyenvana@vimaru.edu.vn",
      isCorresponding: true,
      orcid: "0000-0001-2345-6789",
    },
    {
      name: "Trần Thị B",
      affiliation: "Khoa Công nghệ Thông tin, Trường Đại học Hàng hải Việt Nam",
      email: "tranthib@vimaru.edu.vn",
      isCorresponding: false,
      orcid: "0000-0002-3456-7890",
    },
    {
      name: "Lê Văn C",
      affiliation: "Khoa Công nghệ Thông tin, Trường Đại học Hàng hải Việt Nam",
      email: "levanc@vimaru.edu.vn",
      isCorresponding: false,
      orcid: "0000-0003-4567-8901",
    },
  ],
  journal: "IEEE Transactions on Intelligent Transportation Systems",
  publisher: "IEEE",
  volume: "24",
  issue: "5",
  pages: "1823-1835",
  year: 2023,
  month: "May",
  doi: "10.1109/TITS.2023.123456",
  url: "https://ieeexplore.ieee.org/document/123456",
  abstract: `
    Traffic congestion is a major problem in urban areas, leading to increased travel time, fuel consumption, and air pollution. 
    Accurate and timely detection of traffic congestion is crucial for effective traffic management and control. 
    This paper proposes a novel approach for traffic congestion detection using deep learning and Internet of Things (IoT) sensors. 
    The proposed approach combines data from various IoT sensors, including traffic cameras, inductive loop detectors, and GPS devices, 
    with deep learning models to detect and predict traffic congestion in real-time. 
    We develop a hybrid deep learning architecture that integrates Convolutional Neural Networks (CNNs) for processing visual data 
    from traffic cameras and Long Short-Term Memory (LSTM) networks for analyzing temporal data from other sensors. 
    The proposed model is trained and evaluated on a large-scale dataset collected from the transportation network in Hai Phong city, Vietnam. 
    Experimental results show that our approach achieves 95.8% accuracy in detecting traffic congestion, outperforming existing methods by 7.2%. 
    Furthermore, the proposed system can predict traffic congestion up to 15 minutes in advance with 89.3% accuracy, 
    providing valuable information for proactive traffic management. 
    The system has been deployed in a pilot project in Hai Phong city and has contributed to a 12% reduction in average travel time during peak hours.
  `,
  keywords: [
    "Traffic Congestion",
    "Deep Learning",
    "Internet of Things",
    "Convolutional Neural Networks",
    "Long Short-Term Memory",
    "Smart Transportation",
  ],
  introduction: `
    Traffic congestion is a significant challenge in urban areas worldwide, resulting in economic losses, environmental pollution, and reduced quality of life. 
    According to the INRIX Global Traffic Scorecard, congestion costs billions of dollars annually in lost productivity, wasted fuel, and increased vehicle wear and tear. 
    In Vietnam, rapid urbanization and increasing vehicle ownership have led to severe traffic congestion in major cities, including Hanoi, Ho Chi Minh City, and Hai Phong.

    Traditional approaches to traffic congestion detection rely on fixed sensors such as inductive loop detectors and traffic cameras. 
    While these methods provide valuable data, they have limitations in terms of coverage, accuracy, and real-time capabilities. 
    With the advent of the Internet of Things (IoT) and deep learning technologies, there are new opportunities to develop more effective and efficient traffic congestion detection systems.

    In recent years, deep learning has shown remarkable success in various computer vision and time series analysis tasks. 
    Convolutional Neural Networks (CNNs) have demonstrated exceptional performance in image recognition and object detection, 
    while Long Short-Term Memory (LSTM) networks excel at analyzing sequential data with temporal dependencies. 
    By combining these deep learning techniques with data from IoT sensors, it is possible to create a comprehensive traffic congestion detection system.

    This paper proposes a novel approach for traffic congestion detection using deep learning and IoT sensors. 
    The main contributions of this work are as follows:
    
    1. A hybrid deep learning architecture that integrates CNNs and LSTMs to process multimodal data from various IoT sensors.
    2. A comprehensive data collection and preprocessing pipeline for traffic data from multiple sources.
    3. A real-time traffic congestion detection and prediction system with high accuracy.
    4. A case study of the system's deployment and impact in Hai Phong city, Vietnam.
    
    The rest of the paper is organized as follows: Section II reviews related work in traffic congestion detection. 
    Section III describes the proposed methodology, including the system architecture, data collection, and deep learning models. 
    Section IV presents the experimental results and performance evaluation. 
    Section V discusses the deployment of the system in Hai Phong city and its impact. 
    Finally, Section VI concludes the paper and outlines future work.
  `,
  methodology: `
    The proposed traffic congestion detection system consists of three main components: data collection from IoT sensors, 
    data preprocessing and feature extraction, and deep learning models for congestion detection and prediction.

    A. Data Collection from IoT Sensors
    
    We collect data from three types of IoT sensors:
    
    1. Traffic cameras: High-definition cameras installed at key intersections and road segments capture visual data of traffic flow.
    2. Inductive loop detectors: Embedded in the road surface, these sensors detect vehicles passing over them and provide data on traffic volume and speed.
    3. GPS devices: Installed in public transportation vehicles and participating private vehicles, these devices provide real-time location and speed data.
    
    The data is collected continuously and transmitted to a central server through secure communication channels. 
    To ensure data privacy, all personal information is anonymized before transmission.

    B. Data Preprocessing and Feature Extraction
    
    The collected data undergoes several preprocessing steps:
    
    1. Data cleaning: Removing noise, handling missing values, and correcting errors in the raw data.
    2. Data integration: Combining data from different sources and aligning them temporally and spatially.
    3. Feature extraction: Extracting relevant features from the preprocessed data.
    
    For visual data from traffic cameras, we extract features such as vehicle density, average vehicle speed, and lane occupancy using computer vision techniques. 
    For data from inductive loop detectors, we calculate traffic flow rate, occupancy rate, and average time headway. 
    For GPS data, we compute average speed, travel time, and speed variance along road segments.

    C. Deep Learning Models
    
    We develop a hybrid deep learning architecture that consists of two main components:
    
    1. CNN module: Processes visual data from traffic cameras to extract spatial features related to traffic conditions.
    2. LSTM module: Analyzes temporal data from inductive loop detectors and GPS devices to capture traffic patterns over time.
    
    The CNN module is based on the ResNet-50 architecture, pretrained on the ImageNet dataset and fine-tuned on our traffic image dataset. 
    The LSTM module consists of two stacked LSTM layers with 128 and 64 units, respectively, followed by dropout layers to prevent overfitting.
    
    The outputs of the CNN and LSTM modules are concatenated and fed into fully connected layers for final classification or regression. 
    For congestion detection, the model outputs a binary classification (congested or not congested) for each road segment. 
    For congestion prediction, the model forecasts the probability of congestion occurring in the next 5, 10, and 15 minutes.
    
    The models are trained using the Adam optimizer with a learning rate of 0.001 and a batch size of 32. 
    We use binary cross-entropy loss for the detection task and mean squared error loss for the prediction task. 
    Early stopping is employed to prevent overfitting, with a patience of 10 epochs.
  `,
  results: `
    We evaluate the performance of our proposed approach on a dataset collected from the transportation network in Hai Phong city, Vietnam, 
    over a period of six months (January to June 2022). The dataset includes data from 50 traffic cameras, 100 inductive loop detectors, 
    and 500 GPS devices, covering 30 major road segments in the city.

    A. Congestion Detection Performance
    
    Table I shows the performance of our proposed approach compared to existing methods for traffic congestion detection. 
    The metrics used for evaluation are accuracy, precision, recall, and F1-score.
    
    TABLE I: PERFORMANCE COMPARISON FOR TRAFFIC CONGESTION DETECTION
    
    Method          | Accuracy | Precision | Recall | F1-score
    ----------------|----------|-----------|--------|----------
    Traditional     | 82.3%    | 79.5%     | 81.2%  | 80.3%
    CNN only        | 88.6%    | 86.9%     | 87.4%  | 87.1%
    LSTM only       | 87.2%    | 85.3%     | 86.1%  | 85.7%
    Proposed method | 95.8%    | 94.2%     | 93.9%  | 94.0%
    
    As shown in Table I, our proposed hybrid approach outperforms traditional methods and single-model approaches in all metrics. 
    The integration of CNN and LSTM models allows for better utilization of both spatial and temporal information, 
    resulting in more accurate congestion detection.

    B. Congestion Prediction Performance
    
    Table II presents the performance of our approach for traffic congestion prediction at different time horizons.
    
    TABLE II: PERFORMANCE OF TRAFFIC CONGESTION PREDICTION
    
    Time Horizon | Accuracy | Precision | Recall | F1-score
    -------------|----------|-----------|--------|----------
    5 minutes    | 93.5%    | 92.1%     | 91.8%  | 91.9%
    10 minutes   | 91.2%    | 89.7%     | 88.9%  | 89.3%
    15 minutes   | 89.3%    | 87.6%     | 86.4%  | 87.0%
    
    The results show that our system can predict traffic congestion with high accuracy even 15 minutes in advance, 
    which is valuable for proactive traffic management. As expected, the prediction accuracy decreases as the time horizon increases, 
    due to the inherent uncertainty in traffic patterns.

    C. Computational Efficiency
    
    We also evaluate the computational efficiency of our system, which is crucial for real-time applications. 
    The average processing time for a single inference is 78 milliseconds on a server with an NVIDIA Tesla V100 GPU, 
    which is well within the requirements for real-time traffic management.
  `,
  conclusion: `
    In this paper, we proposed a novel approach for traffic congestion detection using deep learning and IoT sensors. 
    The approach combines data from traffic cameras, inductive loop detectors, and GPS devices with a hybrid deep learning architecture 
    that integrates CNNs and LSTMs. Experimental results on a large-scale dataset from Hai Phong city, Vietnam, 
    demonstrate that our approach achieves high accuracy in both congestion detection and prediction.

    The system has been deployed in a pilot project in Hai Phong city and has contributed to a 12% reduction in average travel time during peak hours. 
    The real-time congestion information and predictions provided by the system enable traffic managers to implement proactive measures, 
    such as adjusting traffic signal timings, rerouting traffic, and informing drivers about congested areas.

    Future work will focus on extending the system to cover a larger area and incorporating additional data sources, 
    such as weather information and social media data. We also plan to explore more advanced deep learning architectures, 
    such as attention mechanisms and graph neural networks, to further improve the accuracy and robustness of the system.
  `,
  acknowledgment: `
    This work was supported in part by the Ministry of Science and Technology of Vietnam under Grant No. 123-2022-ABC 
    and in part by the Hai Phong Department of Transportation. The authors would like to thank the Hai Phong Traffic Management Center 
    for providing the data and facilities for this research.
  `,
  references: [
    {
      id: 1,
      text: "J. Zhang, F. Wang, K. Wang, W. Lin, X. Xu, and C. Chen, \"Data-driven intelligent transportation systems: A survey,\" IEEE Transactions on Intelligent Transportation Systems, vol. 12, no. 4, pp. 1624-1639, 2011.",
    },
    {
      id: 2,
      text: "Y. Lv, Y. Duan, W. Kang, Z. Li, and F. Wang, &quot;Traffic flow prediction with big data: A deep learning approach,&quot; IEEE Transactions on Intelligent Transportation Systems, vol. 16, no. 2, pp. 865-873, 2015.",
    },
    {
      id: 3,
      text: "H. Nguyen, L. M. Kieu, T. Wen, and C. Cai, &quot;Deep learning methods in transportation domain: A review,&quot; IET Intelligent Transport Systems, vol. 12, no. 9, pp. 998-1004, 2018.",
    },
    {
      id: 4,
      text: "X. Ma, Z. Dai, Z. He, J. Ma, Y. Wang, and Y. Wang, \"Learning traffic as images: A deep convolutional neural network for large-scale transportation network speed prediction," Sensors, vol. 17, no. 4, p. 818, 2017.",
    },
    {
      id: 5,
      text: "Z. Cui, K. Henrickson, R. Ke, and Y. Wang, \&quot;Traffic graph convolutional recurrent neural network: A deep learning framework for network-scale traffic learning and forecasting,\&quot; IEEE Transactions on Intelligent Transportation Systems, vol. 21, no. 11, pp. 4883-4894, 2020.",
    },
    {
      id: 6,
      text: "Z. Cui, K. Henrickson, R. Ke, and Y. Wang, \"Traffic graph convolutional recurrent neural network: A deep learning framework for network-scale traffic learning and forecasting,\" IEEE Transactions on Intelligent Transportation Systems, vol. 21, no. 11, pp. 4883-4894, 2020.",
    },
  ],
  relatedPublications: [
    {
      id: 1,
      title: "Real-time Vehicle Detection and Classification for Smart Traffic Management",
      authors: "Tran Thi B, Nguyen Van A, Pham Thi D",
      conference: "International Conference on Computer Vision and Pattern Recognition",
      year: 2023,
      link: "/nghien-cuu/cong-bo-khoa-hoc/vehicle-detection-classification",
    },
    {
      id: 2,
      title: "A Deep Learning Approach for Traffic Flow Prediction in Maritime Transportation",
      authors: "Le Van C, Hoang Van E, Nguyen Van A",
      journal: "Journal of Maritime Research",
      year: 2022,
      link: "/nghien-cuu/cong-bo-khoa-hoc/traffic-flow-maritime",
    },
    {
      id: 3,
      title: "IoT-based Smart Transportation Systems: Challenges and Opportunities",
      authors: "Nguyen Van A, Pham Thi D, Vu Thi F",
      conference: "IEEE International Conference on IoT",
      year: 2022,
      link: "/nghien-cuu/cong-bo-khoa-hoc/iot-smart-transportation",
    },
  ],
  relatedProjects: [
    {
      id: 1,
      title: "Xây dựng hệ thống giám sát và điều khiển giao thông thông minh ứng dụng AI và IoT",
      type: "Đề tài cấp Bộ",
      period: "2022-2024",
      link: "/nghien-cuu/de-tai/giao-thong-thong-minh",
    },
  ],
  images: [
    {
      url: "/placeholder.svg?height=400&width=600",
      caption: "Hình 1: Kiến trúc tổng thể của hệ thống phát hiện tắc nghẽn giao thông",
    },
    {
      url: "/placeholder.svg?height=400&width=600",
      caption: "Hình 2: Mô hình deep learning kết hợp CNN và LSTM",
    },
    {
      url: "/placeholder.svg?height=400&width=600",
      caption: "Hình 3: Kết quả thử nghiệm tại thành phố Hải Phòng",
    },
  ],
  downloadLinks: [
    {
      name: "Bản PDF",
      url: "#",
      icon: "file-text",
    },
    {
      name: "Dữ liệu bổ sung",
      url: "#",
      icon: "database",
    },
    {
      name: "Mã nguồn",
      url: "#",
      icon: "github",
    },
  ],
  metrics: {
    citations: 15,
    downloads: 237,
    views: 1245,
  },
  slug: "traffic-congestion-detection",
}

export default function PublicationDetailPage({ params }: { params: { slug: string } }) {
  // Trong thực tế, bạn sẽ lấy dữ liệu dựa trên params.slug
  // Ở đây chúng ta sử dụng dữ liệu mẫu
  const graph = null
  const convolutional = null
  const recurrent = null
  const neural = null
  const A = null
  const deep = null
  const learning = null
  const framework = null
  const network = null
  const scale = null

  return (
    <>
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden mb-8">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Công bố khoa học" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{publication.title}</h1>
            <div className="flex items-center justify-center text-sm">
              <Link href="/" className="hover:underline">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <Link href="/nghien-cuu" className="hover:underline">
                Nghiên cứu khoa học
              </Link>
              <span className="mx-2">/</span>
              <Link href="/nghien-cuu/cong-bo-khoa-hoc" className="hover:underline">
                Công bố khoa học
              </Link>
              <span className="mx-2">/</span>
              <span>{publication.slug}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Publication details */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Publication info */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">Thông tin công bố</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2 text-gray-800">{publication.title}</h3>
                    <div className="text-gray-600 mb-2">
                      {publication.authors.map((author, index) => (
                        <span key={index}>
                          {author.name}
                          {author.isCorresponding && <sup>*</sup>}
                          {index < publication.authors.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                    <div className="text-gray-600 mb-2">
                      <span className="font-medium">{publication.journal}</span>, {publication.volume}
                      {publication.issue && `(${publication.issue})`}, pp. {publication.pages}, {publication.month}{" "}
                      {publication.year}
                    </div>
                    <div className="text-gray-600 mb-2">
                      <span className="font-medium">DOI:</span>{" "}
                      <a
                        href={`https://doi.org/${publication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {publication.doi}
                      </a>
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Publisher:</span> {publication.publisher}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {publication.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full hover:bg-primary/20"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4">
                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-primary hover:bg-primary-light text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Xem bài báo gốc
                    </a>
                    <Button variant="outline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Tải xuống PDF
                    </Button>
                  </div>
                </div>
              </div>

              {/* Abstract */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">Tóm tắt</h2>
                <div className="prose max-w-none bg-gray-50 p-6 rounded-lg">
                  {publication.abstract.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>

              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">Giới thiệu</h2>
                <div className="prose max-w-none">
                  {publication.introduction.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>

              {/* Methodology */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">Phương pháp nghiên cứu</h2>
                <div className="prose max-w-none">
                  {publication.methodology.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">Kết quả</h2>
                <div className="prose max-w-none">
                  {publication.results.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>

              {/* Images */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">Hình ảnh minh họa</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {publication.images.map((image, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="relative h-48 rounded-lg overflow-hidden mb-2">
                        <Image
                          src={image.url || "/placeholder.svg"}
                          alt={image.caption}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-sm text-gray-600 text-center">{image.caption}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">Kết luận</h2>
                <div className="prose max-w-none">
                  {publication.conclusion.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>

              {/* Acknowledgment */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">Lời cảm ơn</h2>
                <div className="prose max-w-none">
                  <p>{publication.acknowledgment}</p>
                </div>
              </div>

              {/* References */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">Tài liệu tham khảo</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ol className="list-decimal pl-5 space-y-2">
                    {publication.references.map((reference) => (
                      <li key={reference.id} className="text-gray-700">
                        {reference.text}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              {/* Authors */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-primary border-b pb-2">Tác giả</h3>
                <div className="space-y-4">
                  {publication.authors.map((author, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="font-medium text-gray-800">
                        {author.name}
                        {author.isCorresponding && <sup className="text-primary">*</sup>}
                      </span>
                      <span className="text-sm text-gray-600">{author.affiliation}</span>
                      {author.isCorresponding && (
                        <span className="text-sm text-gray-600 mt-1">
                          Email:{" "}
                          <a href={`mailto:${author.email}`} className="text-primary hover:underline">
                            {author.email}
                          </a>
                        </span>
                      )}
                      {author.orcid && (
                        <span className="text-sm text-gray-600">
                          ORCID:{" "}
                          <a
                            href={`https://orcid.org/${author.orcid}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {author.orcid}
                          </a>
                        </span>
                      )}
                    </div>
                  ))}
                  {publication.authors.some((author) => author.isCorresponding) && (
                    <p className="text-xs text-gray-500 mt-2">
                      <sup className="text-primary">*</sup> Tác giả liên hệ chính
                    </p>
                  )}
                </div>
              </div>

              {/* Metrics */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-primary border-b pb-2">Số liệu thống kê</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{publication.metrics.citations}</div>
                    <div className="text-sm text-gray-600">Trích dẫn</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{publication.metrics.downloads}</div>
                    <div className="text-sm text-gray-600">Tải xuống</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{publication.metrics.views}</div>
                    <div className="text-sm text-gray-600">Lượt xem</div>
                  </div>
                </div>
              </div>

              {/* Download links */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-primary border-b pb-2">Tài liệu</h3>
                <div className="space-y-3">
                  {publication.downloadLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="bg-primary/10 text-primary p-2 rounded-full mr-3">
                        {link.icon === "file-text" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        )}
                        {link.icon === "database" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4V7v10c0-2.21-3.582-4-8-4s-8 1.79-8 4z"
                            />
                          </svg>
                        )}
                      </div>
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Related publications */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-primary border-b pb-2">Công bố liên quan</h3>
                <div className="space-y-3">
                  {publication.relatedPublications.map((pub, index) => (
                    <Link
                      key={index}
                      href={pub.link}
                      className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{pub.title}</div>
                        <div className="text-sm text-gray-600">{pub.authors}</div>
                        <div className="text-sm text-gray-600">
                          {pub.conference || pub.journal}, {pub.year}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related projects */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-primary border-b pb-2">Đề tài liên quan</h3>
                <div className="space-y-3">
                  {publication.relatedProjects.map((project, index) => (
                    <Link
                      key={index}
                      href={project.link}
                      className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 3h6m-6 20h6"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{project.title}</div>
                        <div className="text-sm text-gray-600">{project.type}</div>
                        <div className="text-sm text-gray-600">{project.period}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
