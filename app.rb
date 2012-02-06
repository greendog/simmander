get '/*' do
  erb :index
end

get '/about' do
  erb :about
end

post '/list.json' do
  @abs_path = File.expand_path(params[:dir])

  unless File.exists?(@abs_path)
    return "#{@abs_path} does not exist!"
  end

  if (File.directory?(@abs_path)) then
    {:items => folders.concat(files)}.to_json
  else
    send_file @abs_path
  end
end

def folders
  items = []
  Dir.entries(@abs_path).sort.each do |i|
    next if (i == '.')
    next if (i == '..') and @abs_path == File.expand_path(settings.media_dir)
    if File.directory?(File.join(@abs_path, i))
      items << {
          :name => i,
          :id => "#{@abs_path}/#{i}",
          :size => '',
          :type => 'folder'
      }
    end
  end

  items
end

def files
  items = []
  Dir.entries(@abs_path).sort.each do |i|
    if File.file?(File.join(@abs_path, i))
      items << {
          :name => i,
          :id => "#{@abs_path}/#{i}",
          :size => file_size(@abs_path),
          :type => 'file'
      }
    end
  end

  items
end


def file_size(path)
  size = File.size(path)

  if (size > 1_000_000) then
    "#{size / 1_000_000} MB"
  elsif (size > 1_000) then
    "#{size / 1_000} KB"
  else
    "#{size} B"
  end
end