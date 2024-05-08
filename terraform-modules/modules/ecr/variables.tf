# variable "repositories" {
#   description = "A list of repository configurations"
#   type = list(object({
#     name                 = string
#     image_tag_mutability = string
#     scan_on_push         = bool
#     encryption_type      = string
#     kms_key              = string
#     tags                 = map(string)
#   }))
# }

# variable "region" {
#   type = string
# }
