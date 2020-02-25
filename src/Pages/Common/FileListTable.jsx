import React, { Component } from 'react'
import '../../Css/file-list-table.css'

class FileListTable extends Component {

    appendAttachments = () => {
        const fileInput = document.getElementById("file");
        let fileList = fileInput.files;

        const fileListBody = document.getElementById("fileBody");
        for (let i=0; i<fileList.length; i++) {
            let fileNameTd = document.createElement("td");
            fileNameTd.setAttribute('class', 'fileName');
            fileNameTd.innerHTML = fileList[i].name;

            let fileSizeTd = document.createElement("td");
            fileSizeTd.setAttribute('class', 'fileSize');
            fileSizeTd.innerHTML = this.formatBytes(fileList[i].size);

            let fileListTr = document.createElement("tr");
            fileListTr.appendChild(fileNameTd);
            fileListTr.appendChild(fileSizeTd)

            fileListBody.appendChild(fileListTr);
        }

        // Change display attribute from 'none' to 'block'
        const fileListTable = document.getElementsByClassName("fileList")[0];
        fileListTable.style.display = 'block';
    }

    formatBytes = (bytes) => {
        let marker = 1024; // Change to 1000 if required
        let decimal = 3; // Change as required
        let kiloBytes = marker; // One Kilobyte is 1024 bytes
        let megaBytes = marker * marker; // One MB is 1024 KB
        let gigaBytes = marker * marker * marker; // One GB is 1024 MB
        let teraBytes = marker * marker * marker * marker; // One TB is 1024 GB

        // return bytes if less than a KB
        if(bytes < kiloBytes) return bytes + " Bytes";
        // return KB if less than a MB
        else if(bytes < megaBytes) return(bytes / kiloBytes).toFixed(decimal) + " KB";
        // return MB if less than a GB
        else if(bytes < gigaBytes) return(bytes / megaBytes).toFixed(decimal) + " MB";
        // return GB if less than a TB
        else return(bytes / gigaBytes).toFixed(decimal) + " GB";
    }

    render() {
        return (
            <div className={"fileBox"}>
                <div className={"fileLabel robotoFont"}> 파일첨부 </div>
                <div className={"fileInput"}>
                    <label htmlFor="file">내 PC</label>
                    <input type="file" id="file" name="file" multiple onChange={() => {this.appendAttachments()}}/>
                </div>
                <table className={"fileList"}>
                    <thead>
                    <tr>
                        <td className={"fileName"}>파일명</td>
                        <td className={"fileSize"}>파일크기</td>
                    </tr>
                    </thead>
                    <tbody id={"fileBody"}>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FileListTable