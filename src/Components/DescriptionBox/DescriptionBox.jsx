import React from 'react';
import './DescriptionBox.scss';

const DescriptionBox = () => {
    return (
        <div className="description-box">
            <div className="description-box-navigator">
                <div className="description-box-nav-box active">
                    <p>Mô tả</p>
                </div>
                <div className="description-box-nav-box">
                    <p>Bình luận (122)</p>
                </div>
            </div>
            <div className="description-box-content">
                <p>
                    Một sản phẩm thời trang không chỉ đơn giản là một món đồ để mặc, mà là kết quả của sự sáng tạo và
                    công nghệ tiên tiến. Chất liệu chất lượng cao được chọn lựa kỹ lưỡng kết hợp với kiểu dáng độc đáo
                    và chi tiết tinh tế tạo nên một sản phẩm hoàn hảo về cả hình thức lẫn chức năng. Những thiết kế
                    thông minh mang lại sự thoải mái tối đa cho người mặc, giúp họ cảm thấy tự tin và nổi bật trong mọi
                    hoàn cảnh. Từ những đường cắt may tinh xảo đến việc lựa chọn màu sắc hài hòa, mỗi yếu tố đều được
                    cân nhắc cẩn thận để tạo ra một tác phẩm nghệ thuật thực sự trong lĩnh vực thời trang.
                </p>
                <p>
                    Hơn nữa, một sản phẩm thời trang còn là biểu tượng của phong cách và cá tính của người sử dụng. Nó
                    không chỉ đáp ứng nhu cầu về thẩm mỹ mà còn phản ánh gu thẩm mỹ và phong cách sống của người mặc.
                    Mặc một sản phẩm thời trang đẹp giúp bạn thể hiện bản thân mình một cách tốt nhất, từ đó tạo ấn
                    tượng mạnh mẽ với người đối diện. Dù là trong công việc, các sự kiện quan trọng hay cuộc sống hàng
                    ngày, một sản phẩm thời trang chất lượng luôn là người bạn đồng hành đáng tin cậy, mang đến sự tự
                    tin và phong cách cho mỗi người.
                </p>
            </div>
        </div>
    );
};

export default DescriptionBox;
