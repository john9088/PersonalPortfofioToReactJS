import React from 'react'

const CopyrightFooter = () => {
  return (
    <div>
      <div class="copyright py-4 text-center text-white">
        <div class="container">
          <small>Copyright © Your Website 2020</small>
        </div>
      </div>

      <div class="scroll-to-top d-lg-none position-fixed">
        <a
          class="js-scroll-trigger d-block text-center text-white rounded"
          href="#page-top">
          <i class="fa fa-chevron-up"></i >
        </a>
      </div>
    </div>
  )
}

export default CopyrightFooter