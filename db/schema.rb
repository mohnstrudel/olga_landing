# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_09_01_114226) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "friendly_id_slugs", id: :serial, force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type"
    t.index ["sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_id"
    t.index ["sluggable_type"], name: "index_friendly_id_slugs_on_sluggable_type"
  end

  create_table "jobs", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "picture"
    t.float "salary"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "members", force: :cascade do |t|
    t.string "name"
    t.string "picture"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "post_categories", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.bigint "post_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug"
    t.index ["post_id"], name: "index_post_categories_on_post_id"
    t.index ["slug"], name: "index_post_categories_on_slug", unique: true
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.string "picture"
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "post_category_id"
    t.string "slug"
    t.index ["post_category_id"], name: "index_posts_on_post_category_id"
    t.index ["slug"], name: "index_posts_on_slug", unique: true
  end

  create_table "requests", force: :cascade do |t|
    t.string "name"
    t.string "phone"
    t.string "message"
    t.bigint "service_id"
    t.datetime "date"
    t.string "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["service_id"], name: "index_requests_on_service_id"
  end

  create_table "service_categories", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "service_id"
    t.string "slug"
    t.index ["service_id"], name: "index_service_categories_on_service_id"
    t.index ["slug"], name: "index_service_categories_on_slug", unique: true
  end

  create_table "services", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "service_category_id"
    t.string "slug"
    t.index ["service_category_id"], name: "index_services_on_service_category_id"
    t.index ["slug"], name: "index_services_on_slug", unique: true
  end

  create_table "settings", force: :cascade do |t|
    t.string "title"
    t.string "url"
    t.string "phone"
    t.string "instagram"
    t.text "description"
    t.text "address"
    t.string "facebook"
    t.string "vkontakte"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "post_categories", "posts"
  add_foreign_key "posts", "post_categories"
  add_foreign_key "requests", "services"
  add_foreign_key "service_categories", "services"
  add_foreign_key "services", "service_categories"
end
