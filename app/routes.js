const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/content-task', function (req, res) {

  const contentTask = req.session.data['contentTask']

  if (contentTask === 'create-update') {
    res.redirect('/what-content-are-you-working-with')
  } else if (contentTask === 'review-existing') {
    res.redirect('/review-existing')
  } else {
    res.redirect('/what-are-you-trying-to-do')
  }

})

router.post('/content-type', function (req, res) {

  const contentType = req.session.data['contentType']

  if (contentType === 'document') {
    res.redirect('/upload-document')
  } else if (contentType === 'draft-content') {
    res.redirect('/add-draft-content')
  } else if (contentType === 'govuk-pages') {
    res.redirect('/enter-govuk-url')
  } else {
    res.redirect('/what-content-are-you-working-with')
  }

})
router.post('/find-related-content', function (req, res) {

  res.redirect('/related-content-found')

})
router.post('/complete-review-group', function (req, res) {
  res.redirect('/review-findings')
})
router.post('/review-content-type', function (req, res) {

  const reviewContentType = req.session.data['reviewContentType']

  if (reviewContentType === 'topic') {
    res.redirect('/review-topic')
  } else if (reviewContentType === 'urls') {
    res.redirect('/review-urls')
  } else {
    res.redirect('/review-existing')
  }

})

router.post('/find-review-content', function (req, res) {
  res.redirect('/review-related-content')
})
router.post('/complete-out-of-date-review', function (req, res) {

  req.session.data['outOfDateReviewComplete'] = 'yes'

  res.redirect('/review-existing-findings')

})
router.post('/complete-out-of-date-review', function (req, res) {

  req.session.data['outOfDateReviewComplete'] = 'yes'

  res.redirect('/review-existing-findings')

})
router.post('/complete-superseded-review', function (req, res) {

  req.session.data['supersededReviewComplete'] = 'yes'

  res.redirect('/review-existing-findings')

})
router.post('/complete-content-to-supersede-review', function (req, res) {

  req.session.data['contentToSupersedeReviewComplete'] = 'yes'

  res.redirect('/review-findings')

})
router.post('/complete-impacted-content-review', function (req, res) {

  req.session.data['impactedContentReviewComplete'] = 'yes'

  res.redirect('/review-findings')

})
module.exports = router