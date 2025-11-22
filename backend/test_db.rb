require 'pg'

begin
  conn = PG.connect(
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    dbname: 'postgres',
    sslmode: 'disable'
  )
  puts "Connected!"
  conn.close
rescue PG::Error => e
  puts "Error: #{e.message}"
end
