import {React, useState} from 'react';
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import './listItem.scss';

export default function ListItem({index}) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://www.youtube.com/watch?v=FzWG8jiw4XM&t=5228s"
    return (
        <div 
            className="listItem" 
            style={{left: isHovered && index * 255 - 50 - index * 25}}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src="https://thumbs.dfs.ivi.ru/storage32/contents/4/1/dd6e8e58488f2e922e25806468f8ad.jpg" 
                alt=""
            />
            {isHovered && (
            <>  
                <video src={trailer} autoPlay={true} loop />
                <div className="itemInfo">
                    <div className="icons">
                        <PlayArrow className="icon"/>
                        <Add className="icon"/>
                        <ThumbUpAltOutlined className="icon"/>
                        <ThumbDownAltOutlined className="icon"/>
                    </div>
                    <div className="itemInfoTop">
                        <span>1 hour 55 minutes</span>
                        <span className="ageLimit">+16</span>
                        <span>2017</span>
                    </div>
                    <div className="desc">
                        Lorem, uga esse itaque ducimus inventore qui magni illum amet deserunt, ea omnis illo quo nihil sint ipsa suscipit dolore eum!
                    </div>
                    <div className="genre">Horror</div>
                </div>
            </>
            )}
        </div>
    )
}
